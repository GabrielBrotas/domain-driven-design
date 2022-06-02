import { Order } from "../../../../domain/checkout/entity/order";
import { OrderItem } from "../../../../domain/checkout/entity/order-item";
import OrderRepositoryInterface from "../../../../domain/checkout/repository/order-repository.interface";
import { OrderItemModel } from "./order-item.model";
import { OrderModel } from "./order.model";

export class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.unitPrice,
          product_id: item.productId,
          quantity: item.quantity,
          order_id: entity.id,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async update(entity: Order): Promise<void> {
    try{

      const sequelize = OrderModel.sequelize;
      
      await sequelize.transaction(async (t) => {
        await OrderItemModel.destroy({
          where: { order_id: entity.id },
          transaction: t,
        });

        const items = entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.unitPrice,
          product_id: item.productId,
          quantity: item.quantity,
          order_id: entity.id,
        }));

        await OrderItemModel.bulkCreate(items, { transaction: t });
        
        await OrderModel.update(
          { total: entity.total() },
          { where: { id: entity.id }, transaction: t }
        );
      });

    }catch(err) {
      console.log(err)
    }
  }

  async findById(id: string): Promise<Order> {
    const orderModel = await OrderModel.findOne({ where: { id }, include: [{ model: OrderItemModel }] });

    return new Order(
      orderModel.id,
      orderModel.customer_id,
      orderModel.items.map((item) => new OrderItem(item.id, item.name, item.price, item.product_id, item.quantity))
    );
  }

  async findAll(): Promise<Order[]> {
    const orderModels = await OrderModel.findAll({include: [{ model: OrderItemModel }]});
    return orderModels.map((orderModel) =>
      new Order(
        orderModel.id,
        orderModel.customer_id,
        orderModel.items.map((item) => new OrderItem(item.id, item.name, item.price, item.product_id, item.quantity))
      )
    );
  }
}
