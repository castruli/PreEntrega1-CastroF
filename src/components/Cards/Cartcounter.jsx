


export const CartCounter = (props) => {
    return (
        <div className="counter">{props.counter}
        </div>
    )
}
// [{
//     "id": 1,
//     "title": "Dr",
//     "descripcion": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
//     "price": "$6.42",
//     "picture":"https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "stock": "0",
//     "category": "Vinos"
//   }, {
//     "id": 2,
//     "title": "Mrs",
//     "descripcion": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
//     "price": "$3.82",
//     "picture": "https://images.unsplash.com/photo-1561150169-371f366b828a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxjb2hvbHxlbnwwfHwwfHx8MA%3D%3D",
//     "stock": "0",
//     "category": "Importados"
//   }, {
//     "id": 3,
//     "title": "Honorable",
//     "descripcion": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
//     "price": "$1.64",
//     "picture": "https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFsY29ob2x8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Vinos"
//   }, {
//     "id": 4,
//     "title": "Mr",
//     "descripcion": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
//     "price": "$7.61",
//     "picture": "https://images.unsplash.com/photo-1605306792171-9394b91eb0d6?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "stock": "0",
//     "category": "Vinos"
//   }, {
//     "id": 5,
//     "title": "Mr",
//     "descripcion": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
//     "price": "$7.47",
//     "picture": "https://images.unsplash.com/photo-1599536846247-5ba9230a0b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFsY29ob2x8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Vinos"
//   }, {
//     "id": 6,
//     "title": "Honorable",
//     "descripcion": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
//     "price": "$4.84",
//     "picture": "https://images.unsplash.com/photo-1516535794938-6063878f08cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFsY29ob2x8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Aperitivos"
//   }, {
//     "id": 7,
//     "title": "Mrs",
//     "descripcion": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
//     "price": "$8.24",
//     "picture": "https://images.unsplash.com/photo-1566455240374-a43b19daaae2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFsY29ob2x8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Aperitivos"
//   }, {
//     "id": 8,
//     "title": "Mr",
//     "descripcion": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
//     "price": "$2.18",
//     "picture": "https://images.unsplash.com/photo-1569977621579-58987bec59cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFsY29ob2x8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Aperitivos"
//   }, {
//     "id": 9,
//     "title": "Mrs",
//     "descripcion": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
//     "price": "$9.15",
//     "picture": "https://images.unsplash.com/photo-1599419685838-28e405ea05b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGFsY29ob2x8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Aperitivos"
//   }, {
//     "id": 10,
//     "title": "Ms",
//     "descripcion": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
//     "price": "$8.48",
//     "picture": "https://images.unsplash.com/photo-1499424474736-c040d0665d84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvdGVsbGElMjBkZSUyMGNlcnZlemF8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Cervezas"
//   }, {
//     "id": 11,
//     "title": "Rev",
//     "descripcion": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
//     "price": "$1.64",
//     "picture": "https://images.unsplash.com/photo-1528615141309-53f2564d3be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJvdGVsbGElMjBkZSUyMGNlcnZlemF8ZW58MHx8MHx8fDA%3D",
//     "stock": "0",
//     "category": "Cervezas"
//   }, {
//     "id": 12,
//     "title": "Rev",
//     "descripcion": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
//     "price": "$5.83",
//     "picture": "https://images.unsplash.com/photo-1606657765076-44154cfec14d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Cervezas"
//   }, {
//     "id": 13,
//     "title": "Dr",
//     "descripcion": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
//     "price": "$0.00",
//     "picture": "https://images.unsplash.com/photo-1618412063173-1a3d5e836d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Cervezas"
//   }, {
//     "id": 14,
//     "title": "Mr",
//     "descripcion": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
//     "price": "$4.37",
//     "picture": "https://images.unsplash.com/photo-1613391454867-64922cf01bac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "stock": "0",
//     "category": "Vodkas"
//   }, {
//     "id": 15,
//     "title": "Mr",
//     "descripcion": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
//     "price": "$9.35",
//     "picture": "https://images.unsplash.com/photo-1580410951971-e393e7b711d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Vodkas"
//   }, {
//     "id": 16,
//     "title": "Mrs",
//     "descripcion": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
//     "price": "$1.49",
//     "picture": "https://images.unsplash.com/photo-1553516859-9842957da4da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Vodkas"
//   }, {
//     "id": 17,
//     "title": "Rev",
//     "descripcion": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
//     "price": "$0.87",
//     "picture": "https://images.unsplash.com/photo-1589816502401-1deebf9e79f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Vodkas"
//   }, {
//     "id": 18,
//     "title": "Mr",
//     "descripcion": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
//     "price": "$5.87",
//     "picture": "https://images.unsplash.com/photo-1628531242321-9206b82c3ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Vodkas"
//   }, {
//     "id": 19,
//     "title": "Dr",
//     "descripcion": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
//     "price": "$7.16",
//     "picture": "https://images.unsplash.com/photo-1561916542-c981c30f0cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Importados"
//   }, {
//     "id": 20,
//     "title": "Dr",
//     "descripcion": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
//     "price": "$3.95",
//     "picture": "https://images.unsplash.com/photo-1642603437696-cba5ab7ae494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxib3RlbGxhJTIwZGUlMjBjZXJ2ZXphfGVufDB8fDB8fHww",
//     "stock": "0",
//     "category": "Importados"
//   }]
  