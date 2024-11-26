import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
   const { taste, supplier, quantity, photo, name, _id } = coffee;
   const handleDelet = _id => {
      console.log(_id);
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`, {
               method: 'delete'
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     })
                     const imaning=coffees.filter(coffee=>coffee._id!== _id)
                     setCoffees(imaning)
                  }
               })
         }
      });
   }
   return (
      <div className="card card-side bg-base-100 border p-6 shadow-xl">
         <figure>
            <img
               src={photo}
               alt="Movie" />
         </figure>
         <div className="flex justify-between items-center w-full">
            <div>
               <h2 className="card-title">Name: {name}</h2>
               <p>quantity: {quantity}</p>
               <p>supplier: {supplier}</p>
               <p>Taste: {taste}</p>
            </div>
            <div className="card-actions justify-end">
               <div className="join join-vertical space-y-4">
                  <button className="btn join-item">view</button>
                  <Link to={`/updateCoffee/${_id}`}>
                     <button className="btn join-item clear-start text-3xl btn-neutral"><BsPencilFill className='text-white'/></button>
                  </Link>
                  <button onClick={() => handleDelet(_id)} className="btn join-item bg-orange-200 text-3xl"><MdDelete className='text-red-800'/></button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoffeeCard;