const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a01ed2ab-1362-4947-92cd-07e627f4a4ff");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
        
        
        if (res.success) {
            console.log("Success", res);
        }
      };
  return (
    <div id="contact" className="w-full px-[15%] bg-gray-100 py-24">
        <h3 className="text-center text-5xl font-bold mb-5">Contact Me</h3>
        <p className="text-center text-sm lg:w-[40%] mx-auto">Message Through This Form I will reply as soon as possiblet</p>


        {/* form  */}
        <form className="mt-10 max-w-lg mx-auto" onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-2 mb-8">
                    <input type="text" placeholder="Enter Your Name" className="outline-none  border-[0.5px] border-gray-500 rounded-md bg-white p-3" name="name"/>
                    <input type="email" placeholder="Enter Your Email" className="outline-none border-[0.5px] border-gray-500 rounded-md bg-white p-3" name="email"/>
                </div>
                <textarea rows="8" placeholder="Enter a Message" class="mb-6 resize-none w-full outline-none border-[0.5px] border-gray-500 rounded-md bg-white p-3" name="message"></textarea>
                <button type="submit" class="py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
                    Send Message
                </button>
         </form>
    </div>
)}

export default Contact

