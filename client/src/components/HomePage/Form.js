import React from 'react';
import { useForm } from "react-hook-form";

const Form = ({ onFormData }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        onFormData(data);

        //Reset Form
        e.target.reset();
    };

    return (
        <div>
            <input type="checkbox" id="pop-up-form" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <form id='myForm' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='input input-bordered input-info w-full max-w-xs mb-3'
                            placeholder='name'
                            type={"text"}
                            {...register("name", { required: true, maxLength: 15 })} />

                        <input
                            className='input input-bordered input-info w-full max-w-xs mb-3'
                            placeholder='email'
                            type="email"
                            {...register("email", { required: true })} />

                        <input
                            className='input input-bordered input-info w-full max-w-xs mb-3'
                            placeholder='phone number'
                            type="number"
                            {...register("number", { required: true })} />

                        <input
                            className='input input-bordered input-info w-full max-w-xs mb-3'
                            placeholder='hobby'
                            type={"text"}
                            {...register("hobby", { required: true, maxLength: 30 })} />
                        <br />

                        <button className='btn btn-info w-full max-w-xs' type="submit">Save</button>
                    </form>

                    <div className="modal-action">
                        <label htmlFor="pop-up-form" className="btn btn-info btn-outline">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;