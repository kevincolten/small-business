// import React from 'react'
// import {
//     Container,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow
// } from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete'
// import AddCar from '../containers/AddCar'
 
// const Listing = (props) => {
//     return (
//         <Container maxWidth="lg" className="car-container">
//             <h4>Welcome, {props.user.username}</h4>
//             <div className="flex-container">
//                 <AddCar carTotal={props.cars.length} />
//             </div>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Id</TableCell>
//                         <TableCell>Make/Model</TableCell>
//                         <TableCell>MPG</TableCell>
//                         <TableCell>Cylinders</TableCell>
//                         <TableCell>Horsepower</TableCell>
//                         <TableCell>Delete</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {props.cars.map((car, idx) => (
//                     <TableRow key={car.id}>
//                         <TableCell component="th" scope="row">
//                             {car.id}
//                         </TableCell>
//                         <TableCell>{car["name"]}</TableCell>
//                         <TableCell>{car["mpg"]}</TableCell>
//                         <TableCell>{car["cylinders"]}</TableCell>
//                         <TableCell>{car["horsepower"]}</TableCell>
//                         <TableCell>
//                             <DeleteIcon
//                                 // add onClick method here
//                                 onClick={() => props.removeCar(idx)}
//                                 className="icon text-red" />
//                         </TableCell>
//                     </TableRow>
//                 ))}
//                 </TableBody>
//             </Table>
//         </Container>
//     )
// }

// export default Listing