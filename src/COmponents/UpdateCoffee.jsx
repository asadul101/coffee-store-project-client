import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
   const coffee=useLoaderData()
   const { taste, supplier, quantity, photo, name, _id ,category,details} = coffee;
   const handleSubmit =e=>{
      e.preventDefault()
      const form=e.target;
      const name=form.name.value;
      const quantity=form.quantity.value;
      const supplier=form.supplier.value;
      const taste=form.taste.value;
      const category=form.category.value;
      const details=form.details.value;
      const photo=form.photo.value;
      const UpdateCoffee={name,quantity,supplier,taste,category,details,photo}
      console.log(UpdateCoffee);
      fetch(`http://localhost:5000/coffee/${_id}`,{
         method:'put',
         headers:{
            'Content-Type': 'application/json'
         },
         body:JSON.stringify(UpdateCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data);
         if(data.modifiedCount>0){
            Swal.fire({
               title: "Update SuccessFully",
               icon: "success"
             });
         }
      })
   }
   return (
      <div className='max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold py-4'> Add Coffee</h1>
      <div className="hero bg-base-200 min-h-[650px]">
         <div className="hero-content text-center">
            <form onSubmit={handleSubmit}>
               {/* //coffee name */}
               <div className='flex gap-10 mb-4'>
                  <div className=''>
                     <label className="form-control w-full max-w-xs">
                        <div className="label">
                           <span className="label-text">Coffee Name</span>
                        </div>
                        <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full max-w-xs" />
                     </label>
                  </div>
                  <div>
                     <label className="form-control w-full max-w-xs">
                        <div className="label">
                           <span className="label-text">Avilabal Quantity</span>
                        </div>
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Avilabal Quantity" className="input input-bordered w-full max-w-xs" />
                     </label>
                  </div>
               </div>
               {/* //coffee Supplier */}
               <div className='flex gap-10 mb-4'>
                  <div className=''>
                     <label className="form-control w-full max-w-xs">
                        <div className="label">
                           <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs" />
                     </label>
                  </div>
                  <div>
                     <label className="form-control w-full max-w-xs">
                        <div className="label">
                           <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full max-w-xs" />
                     </label>
                  </div>
               </div>
               {/* //coffee Category */}
               <div className='flex gap-10 mb-4'>
                  <div className=''>
                     <label className="form-control w-full max-w-xs">
                        <div className="label">
                           <span className="label-text">Category</span>
                        </div>
                        <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs" />
                     </label>
                  </div>
                  <div>
                     <label className="form-control w-full max-w-xs">
                        <div className="label">
                           <span className="label-text">Details</span>
                        </div>
                        <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full max-w-xs" />
                     </label>
                  </div>
               </div>
               <div className='mb-4'>
                  <label className="form-control w-full max-w-xs">
                     <div className="label">
                        <span className="label-text">Photo URL</span>
                     </div>
                     <input type="text" name='photo' defaultValue={photo} placeholder="Coffee Photo URL" className="input input-bordered w-full max-w-xs" />
                  </label>
               </div>
               <input type="submit" value="Update Cofee" className="btn btn-block btn-neutral"/>
            </form>
         </div>
      </div>
   </div>
   );
};

export default UpdateCoffee;