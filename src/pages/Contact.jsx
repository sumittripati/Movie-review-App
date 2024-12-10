// import { Form } from "react-router-dom"

// export let contactData =async({ request })=>{
// try {
//   let res = await request.formData()
//   // console.log(res)
//   let data = Object.fromData(res)
//   console.log(data)
//   return null
// } catch (error) {
//   console.log(error.message)
// }
// }
// const Contact = () => {
//   return (
//     <>
//       <section>
//         <div>
//           <h2>Contact Us</h2>
//           <p>Get in touch with us. we are always here to help you</p>
//         </div>
//         <div>
//           <div>
//             <Form method="POST" action="/contact">
//               <div>
//                  <div>
//                   <label htmlFor="username">Full Name</label>
//                   <input type="text"
//                   name="username"
//                   id="username"
//                   required
//                   autoComplete="off"
//                   placeholder="Enter Full Name"
//                    />
//                  </div>

//                  <div>
//                      <label htmlFor="email">Email</label>
//                      <input type="email"
//                       name="email"
//                       id="emil"
//                       required
//                       autoComplete="off"
//                       placeholder="Enter your Mail"/>
//                   </div>

//                   <div>
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                   name="message"
//                   id="message"
//                   cols="30"
//                   rows="10"
//                   placeholder="we are always here to help you"
//                    />
//                  </div>
//               </div>
           
//             </Form>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Contact












// import { Form } from "react-router-dom";

// export let contactData = async ({ request }) => {
//   try {
//     // Parse the form data from the request
//     let res = await request.formData(); // Extract FormData from the request
//     let data = Object.fromEntries(res); // Convert FormData to an object
//     console.log("Submitted Data:", data); // Log the data to the console
//     return null; // You can return a response or redirect if needed
//   } catch (error) {
//     console.error("Error processing form data:", error.message); // Handle errors
//   }
// };

// const Contact = () => {
//   return (
//     <>
//       <section>
//         <div>
//           <h2>Contact Us</h2>
//           <p>Get in touch with us. We are always here to help you.</p>
//         </div>
//         <div>
//           <div>
//             {/* The Form will handle the submission */}
//             <Form method="POST" action="/contact">
//               <div>
//                 <div>
//                   <label htmlFor="username">Full Name</label>
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     required
//                     autoComplete="off"
//                     placeholder="Enter Full Name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     required
//                     autoComplete="off"
//                     placeholder="Enter your Email"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     cols="30"
//                     rows="10"
//                     required
//                     placeholder="We are always here to help you"
//                   ></textarea>
//                 </div>
//               </div>
//               <button type="submit">Send Message</button>
//             </Form>
//           </div>
//         </div>
//         <div>
//           <img src="./images/contact.png" alt="" />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;








// import { Form } from "react-router-dom";

// export let contactData = async ({ request }) => {
//   try {
//     let res = await request.formData();
//     let data = Object.fromEntries(res);
//     console.log("Submitted Data:", data);
//     return null;
//   } catch (error) {
//     console.error("Error processing form data:", error.message);
//   }
// };

// const Contact = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
//       {/* Form Section */}
//       <div className="flex-1 max-w-md">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
//         <p className="text-gray-600 mb-8">
//           Get in touch with us. We are always here to help you.
//         </p>
//         <Form method="POST" action="/contact" className="space-y-6">
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               required
//               autoComplete="off"
//               placeholder="Enter Full Name"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               autoComplete="off"
//               placeholder="Enter your Email"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               cols="30"
//               rows="5"
//               required
//               placeholder="We are always here to help you"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Send Message
//           </button>
//         </Form>
//       </div>

//       {/* Image Section */}
//       <div className="flex-1">
//         <img
//           src="./src/images/contact.png"
//           alt="Contact"
//           className="w-full rounded-lg shadow-lg"
//         />
//       </div>
//     </section>
//   );
// };

// export default Contact;













import { Form } from "react-router-dom";

export let contactData = async ({ request }) => {
  try {
    let res = await request.formData();
    let data = Object.fromEntries(res);
    console.log("Submitted Data:", data);
    return null;
  } catch (error) {
    console.error("Error processing form data:", error.message);
  }
};

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
      {/* Form Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with us. We are always here to help you.
        </p>
        <Form method="POST" action="/contact" className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              autoComplete="off"
              placeholder="Enter Full Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
              placeholder="Enter your Email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
              placeholder="We are always here to help you"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </Form>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src="https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg"
          alt="Contact"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
