import{y as a,z as o,R as d,A as n,B as i}from"../index67211.js";class s{static async fetchAll(r){return(await a("/orders",r)).data}static async getOrderDetail(r){return(await a(`/orders/${r}`)).data.order}static async createOrder(r){return(await o("/orders",r)).data.order}static async deleteOrder(r){return(await d(`/orders/${r}`)).data}static async updateInvoiceNumber(r){return(await n(`/orders/${r.id}`,r)).data.order}}const p=i({id:"order",state:()=>({order:{},orders:[],response_orders:{},total_orders:Number}),getters:{allOrders:e=>e.response_orders.orders,responseOrders:e=>e.response_orders,getTotalOrders:e=>e.response_orders?e.response_orders.total:0,getCurrentOrder:e=>e.order,orderTypology:()=>[{name:"Ora",value:"hour"},{name:"Giorno",value:"day"},{name:"Settimana",value:"week"},{name:"Mese",value:"week"}]},actions:{async fetchAllOrders(e){await s.fetchAll(e).then(r=>this.response_orders=r)},async fetchOrderDetail(e){await s.getOrderDetail(e).then(r=>this.order=r)},async createOrder(e){await s.createOrder(e).then(r=>this.order=r)},async deleteOrder(e){await s.deleteOrder(e).then(r=>this.order={})},async updateInvoiceNumber(e){await s.updateInvoiceNumber(e).then(r=>this.order=r)}}});export{p as u};
