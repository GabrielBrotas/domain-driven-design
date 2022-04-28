# Domain Driven Design

Como modelar um software de forma.

DDD é uma forma de desenvolver software com o foco no coração da aplicação - o que chamamos de domínio - tendo o objetivo de entender suas regras, processos e complexidades, separando-as assim de outros pontos complexos que normalmente são adicionados durante o processo de desenvolvimento.

DDD é sobre modelagem de linguagem ubíqua (universal) dentro de um contexto delimitado.

<br />

### **Softwares complexos**

- DDD é / deve ser aplicado para casos de projetos de softwares complexos;
- Grandes projetos possuem muitas áreas, muitas regras de negócio, muitas pessoas com diferentes visões em diferentes contextos;
- Não há como não utilizar técnicas avançadas em projetos de alta complexidade;
- Grande parte da complexidade desse tipo de software não vem da tecnologia, mas sim da comunicação, separação de contexto, entendimento do negócio por diversos ângulos;
- Pessoas (Product Manager, Owner, Desenvolvedor, Experts, Arquitetos, ...)

O DDD deve ser aplicado para projetos grandes, que tem várias áreas, várias áreas de negócio, e pessoas que estão em diferentes contexto.

o DDD foi criado para dar mais clareza no projeto, entender que o software não é só mais um. Nosso papel como desenvolvedor é entender isso e saber modelar para cada tipo de sistema e contexto.

Domain-Driven Design é, antes de tudo, **comunicação**. No DDD modelagem e implementação andam juntas.

Especialistas do domínio (usuários, analistas e outros especialistas da área), juntamente com os desenvolvedores e arquitetos trabalham de mãos dadas com um objetivo em comum: **construir software guiado pelo domínio para atender as necessidades do cliente.**

Para fazer isso, em primeiro lugar, **é necessário que todos usem uma linguagem em comum** e que não haja tradução na comunicação entre os membros do time.

<br />

### Como DDD pode ajudar?
- **Entender com profundidade o domínio (domain) e subdomínios da aplicação.**
**Domínio** é algo que está ligado com a função principal da aplicação que a gente vai desenvolver, é o coração do software que vamos desenvolver;
**Subdomínio**, a separação do domínio em pedaços, que fazem as peças se encaixarem para criar o core da aplicação. Importante entender o limite de cada subdomínio.

- **Ter uma linguagem universal (linguagem ubíqua) entre todos os envolvidos.**
Utilizar jargões da área que é utilizada naquele contexto.
Ex: o cliente de uma empresa B2B são empresas, porém o cliente de uma padaria são pessoas, então nem sempre a entidade ‘cliente’ vai ser a mesma coisa, tudo depende do contexto
Se a empresa chama nota fiscal de ABC, na nossa aplicação também devemos chamar assim pois vai facilitar a comunicação entre Arquiteto de Solução - Empresa, manter todos no mesmo contexto

- **Criar o design estratégico utilizando Bounded Contexts.**
Entender o contexto / limites de cada subdomínio

- **Criar o design tático para conseguir mapear e agregar as entidades e objetos de valor da aplicação, bem como os eventos de domínio.**

- **Clareza do que é complexidade de negócio e complexidade técnica.**

<br />

## Domínio vs Subdomínio

**Domain Driven Design →** Design orientado ao domínio.

Domínio é o problema como um todo, quando vamos explorando mais esse domínio/problema começamos a identificar alguns pontos que podem ser tratados de forma isolada, e cada ponto desse tem um grau de importancia dentro do domínio principal.

**Exemplo:** Dentro da Netflix o core principal (core domain) é o serviço de streaming, listar o catálogo e reproduzir os filmes, se não tiver isso não faz sentido a aplicação existir

**Core Domain:**

- Coração do negócio;
- Diferencial competitivo da empresa;

**Support subdomain:**

- Apoiam o domínio no dia a dia
    
    Ex: dentro de um ecommerce os produtos e checkout são o core domain porém é necesário a warehouse (centro de distribuição) que funciona como o support subdomain
    
- Faz a operação do domínio possível

**Generic subdomain**

- Apoia os subdomain e core domain porém não gera um diferencial competitivo para a empresa.
- São facilmente substituíveis
- Software auxiliares

<br />

### Espaço do Problema vs Espaço da Solução

DDD → Entender o problema e como você modela o problema para que você consiga resolvê-lo.

Com isso a gente acaba tendo um espaço de problema e um de solução

```json
					Problema                        Solução
-----------------------------    ------------------------------
(1)Visão geral do domínio     =>  (3) Analise e modelagem do
e suas complexidades.                 domínio
		   ⬇️                                   ⬇️                
		   ⬇️                                   ⬇️                
(2)	  	Subdomínios           =>  (4) Contextos delimitados
```

Quando temos a visão geral do domínio e suas complexidades a gente começa a entender e separar os subdomínios, ainda no espaço do problema.

Solução ⇒ Como que eu consigo entender esse problema e organizar de uma forma que eu consiga resolver tudo isso, pegar cada subdomínio e delimitar contextos, cada contexto desse gerado acaba se tornando um sub produto;

Assim conseguimos ter o domínio modelado e os contextos delimitados para podermos entender o que temos que fazer e qual a prioridade.

Subdominios com contextos delimitados ⇒ problema específico que temos que resolver

<br />

**Bounded Contexts →** **Contexto Delimitado**

Quando temos um subdomínio podemos delimitá-los para criar um bounded context.

Um contexto delimitado é uma divisão explícita dentro de um modelo de domínio. uma fronteira / limite de um domínio que estamos modelando.

Uma das formas que consiguimos trazer essa delimitação é através da **l**inguagem ubíqua, conseguimos entender onde estamos através da linguagem que está sendo falada naquele contexto.

Quando está todo mundo falando a mesma lingua percebemos que estamos no mesmo contexto, quando essa linguagem começa a mudar começamos a identificar que estamos indo para outro contexto.

**“Contexto é Rei”**

O contexto sempre vai determinar em qual área da empresa estamos trabalhando, qual tipo de problema estamos tentando resolver, e também a linguagem pode ser a mesma de um lugar para outro porém terem significados diferentes.

**Exemplos:**

- Venda de ingressos ⇒  Ticket // compra do ingresso
- Suporte ao cliente ⇒ Ticket // identificador da solicitação de suporte

Quando temos duas palavras iguais mas que representam coisas diferentes estamos em um contexto diferente

Se estamos em um sistema monolítico vamos ter que criar entidades diferentes para cada um de acordo com seu contexto.

- Financeiro ⇒ eNFS
- Inventário ⇒ XPTO (nome para nota fiscal)

Quando temos duas palavras diferentes que significam a mesma coisa provavelmente estamos em um contexto diferente.

**Elementos transversais**

Muitas vezes apesar de estarmos em contexto diferentes esses modelos acabam se conversando entre entidades / elementos transversais.

Exemplo:

- Venda de ingressos ⇒  Cliente
- Suporte ao cliente ⇒ Cliente

Apesar de ser contexto diferente é a mesma entidade, porém, apesar de ser a mesma entidade eles vão ter informações diferentes.

- Venda de ingressos ⇒  Cliente → Evento, Ticket, Local, Vendedor...
- Suporte ao cliente ⇒ Cliente → Ticket, Duvida, Departamento, Reponsável,...

Para cada contexto uma entidade vai ter que ser personalizada para o mesmo, pois ter uma classe quer lidar com tudo acaba sendo inviável e difícil de dar manutenção

### Visão Estatégia

Modelagem estratégica / Context Mapping

<br />


Cliente / Fornecedor = um time fornece uma informação / serviço para o outro realizar uma transação

U ⇒ Upstream ⇒ de cima, fornece o serviço, portanto ele dita as regras de como vai ser utilizado

D ⇒ Downstream ⇒ consumidor

<br />

## Entidades

Entidades são únicas, não podem ter ID’s únicos, cada uma é diferente da outra;

Entidades carregam atributos que podem ir mudando com o tempo (removendo ou adicionando);

**Entidades anêmicas**

```jsx
class Customer {
	_id: string;
    _name: string;
	_address: string

	constructor(id: string, name: string, address: string) {
        this._id = id;
		this._name = name;
		this._address = address
    }

	get id(): string {
		return this._id
	}

	get name(): string {
		return this._name
	}

	get address(): string {
		return this._address
	}

	set name(name: string) {
		this._name = name
	} 

	set address(address: string) {
		this._address = address
	}
}
```

Entidades anêmicas são do tipo que só carregam dados e alteram o nome das propriedades. E geralmente criamos essas entidades para ser manipuladas pelo ORM, são entidades que não tem um valor significativo em si.

Entidades ricas são entidades que tem valor único, os dados podem ser alterados, tem comportamento e carregam regras de negócio, e são nessas regras de negócio que vivem o coração do negócio. 

Agora ao invés de as entidades apenas carregar dados elas vão definir como a entidade deve se comportar (regras de negócio, auto validação, etc...), pois se o cliente disser que a entidade XPTO agora se comporta de outra forma, é nessa entidade que devemos alterar.

A primeira coisa que devemos fazer quando pensamos em uma Entidade é pensar qual deve ser o tipo de comportamento que ela vai carregar.

Ex:

Este tipo de mudança não tem nenhuma expressividade, está ai só por estar, é um método de alterar um atributo

```jsx
	set name(name: string) {
		this._name = name
	} 
```

Depois:

Significa que essa Entidade, a regra de negócio dela, permite que um usuário possa mudar o nome dela,
a entidade precisa desse método

```jsx
changeName(name: string) {
		this._name = name
	} 
```

Consistência constante em primeiro lugar: uma Entidade sempre vai ter que representar o estado correto e atual daquele elemento, ou seja, se no banco de dados a entidade tem (_id, name, address e status) e todos os campos são obrigatórios,  SEMPRE SEMPRE todos os dados dessa entidade devem ter esses atributos, se por algum acaso um dado não tiver address significa que está ferindo o DDD e as regras de domínio rico.

Sempre que formos consultar essa entidade os dados tem que estar consistentes, uma vez que ela não está consistente não podemos validar regras de negócio. Quando falamos em DDD devemos poder confiar 100% das vezes no estado atual do objeto.

**Princípio da auto validação:** Uma Entidade, por padrão, ela sempre deve se auto validar

Problema:

Se a deixamos a responsabilidade para outro recurso do sistema os dados podem vim inconsistentes

```jsx
class Customer {
	_id: string;
  _name: string;
	
	constructor(id: string, name: string) {
    this._id = id;
		this._name = name;
	}

	get id(): string {
		return this._id
	}

	get name(): string {
		return this._name
	}

	changeName(name: string) {
		this._name = name
	}
}

const newCustomer = new Customer("1", "")
```

Arquitetura:

```jsx
src/...
  
  //Complexidade de negócio / regras de negócio
	// Uma única forma de rodar, do jeito que o cliente está pedindo.
	/domain/... 

	// Complexidade adidental / Conversa com o mundo externo / Armazenar de dados...
  // n formas de resolver, Excel, Sass, DB, Cloud,...
	/infra/... <- 
	
```
<br />

### Objetos de valor

“Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object”

Um Value Object é imutável, ele não muda ele é trocado por outro VO.

Ex:

```jsx
class Address {
	_street: string;
	_number: number;
	_zip: string;
	_city: string;

	constructor(street: string, number: number, zip: string, city: string) {
		this._street = street;
		this._number = number;
		this._zip = zip;
		this._city = city
	}
}

class Customer {
	_id: string;
    _name: string;
	_address!: Address;

	constructor(id: string, name: string) {
        this._id = id;
		this._name = name;
    }

	get id(): string {
		return this._id
	}

	get name(): string {
		return this._name
	}

	get address(): Address {
		return this._address
	}

	set name(name: string) {
		this._name = name
	} 

	set address(address: Address) {
		this._address = address
	}
}
```

## Domain Services

> Um serviço de domínio é uma operação sem estado que cumpre uma tarefa específica do domínio. Muitas vezes, a melhor indicação de que você deve criar um Serviço no modelo de domínio é quando a operação que você precisa executar parece não se encaixar como um método em um Agregado ou um Objeto de Valor.
> 

> Quando um processo ou transformação significativa no domínio não for uma responsabilidade natural de uma ENTIDADE ou Objeto de Valor, adicione uma operação ao modelo como uma interface autônoma declarada como um SERVIÇO. Defina a interface em baseada na linguagem do modelo de domínio e certifique-se de que o nome da operação faça parte do UBIQUITOUS LANGUAGE. Torne o SERVIÇO sem estado.
> 

O Domain Service é stateless;

Qualquer alteração / transformação / transação,..., qualquer coisa que mexa no domínio e que a gente não consiga realizar na própria classe da Entidade, pq precisamos de acesso a outra Entidade, OV, ou algo externo é pq precisamos utilizar um Domain Service.

Esses serviços rodam na cama da Domínio, onde as regras de negócio ocorrem.

Quando criar domain service?

- Uma entidade pode realizar uma ação que vai afetar todas as entidade?
- Como realizar uma operação em lote?
- Como calcular algo cuja as informações constam em mais de uma entidade?

**Cuidados:**

- Quando houver muitos Domain Services em seu projeto, TALVEZ isso pode indicar que seus agregados estão anêmicos. (só tem get e set)
- Domain Services são Stateless (não guargam estado)

<br />

## Repositories

> Um repositório comumente se refere a um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. Quando você armazena algo em um repositório e depois retorna para recuperá-lo, você espera que ele esteja no mesmo estado que estava quando você o colocou lá. Em algum momento, você pode optar por remover o item armazenado do repositório.
> 

> Esses objetos, semelhantes a coleções, são sobre persistência. Todo tipo Agregado persistente terá um Repositório. De um modo geral, existe uma relação 1-1 entre um tipo Agregado e um Repositório.
> 

<br />

## Domain Events

> Use um evento de domínio para capturar uma ocorrência de algo que aconteceu no domínio.
> 

> A esseência de um evento de domínio é que você o usa para capturar coisas que podem desencadear uma mudança no estado do aplicativo que você está desenvolvendo. Esses objetos de evento são processados para causar alterações no sistema e armazenados para fornecer um AuditLog.
> 

Executar uma operação baseado em um evento ou armazenar um log;

Todo evento deve ser representado em uma ação realizada no passado;

Ex:

- UserCreated;
- OrderPlaced;
- EmailSent;

**Quando utilizar?**

Normalmente um Domain Event deve ser utilizado quando queremos notificar **outros Bounded Contexts** de uma mudança de estado.

Comunicação com contextos externos;

**Componentes**

- **Event** → contém a mesagem junto com o timestamp de quando ocorreu;
- **Handler** → implementação concreta do evento que é disparado, executa o processamento quando um evento é chamado, um evento pode ter vários handlers. ex: mandar email, chamar api externa, enviar push notification,...
- **Event Dispatcher** → Responsável por armazenar e executar os handlers de um evento quando ele for disparado; registra todos os eventos e seus handlers.

**Fluxo:**

- Cria um “Event Dispatcher”
- Cria um “Evento”
- Cria um “Handler” para o “Evento”
- Registra o Evento, juntamente com o Handler no “Event Dispatcher”

Agora para disparar um evento, basta executar o método “notify” do “Event Dispatcher”. Nesse momento todos os Handlers registrados no evento serão executado.

<br />

## Módulos

> Em um contexto DDD, Módulos em seu modelo servem como contêineres nomeados para classes de objetos de domínio que são altamente coesas entre si. O objetivo deve ser baixo acoplamento entre as classes que estão em módulos diferentes. Como os Módulos usados no DDD não são compartimentos de armazenamento anêmicos ou genéricos, também é importante nomear adequadamente os Módulos.
> 

- Representa a aplicação representada pelo domínio;
- Os módulos devem respeitar a linguagem universal (ubíquoa);
- Baixo acoplamento;
- Um ou mais agregados devem estar juntos somente se fazem sentido;
- Organizado pelo domínio / subdomínio e não pelo tipo de objetos
- Devem respeitar a mesma divisão quando estão em camadas diferentes (infra, domain, ...) fica mais fácil para manter uma corelação;

<br />

## Factories

> Desloque a responsabilidade de criar instâncias de objetos complexos e Agregados para um objeto separado, que não pode ter responsabilidade no modelo de domínio, mas ainda faz parte do design do domínio. Forneça uma interface que encapsule toda a criação complexa e que não exija que o cliente faça referência as classes concretas dos objetos que estão sendo instanciados. Crie Aggregates inteiros de uma única vez, reforçando suas invariantes.
> 

Toda vez que temos a necessidade de riar um objeto complexo podemos delegar para a factory resolver isso.