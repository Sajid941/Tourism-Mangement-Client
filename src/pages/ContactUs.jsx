
const ContactUs = () => {
    return (
        <div className="lg:px-48">
            <form action="" className="form bg-white dark:bg-darkPrimary p-6 my-10 relative">
                <h3 className="text-2xl text-gray-900 dark:text-white font-semibold">Let us call you!</h3>
                <p className="text-gray-600 dark:text-gray-400">To help you choose your property</p>
                <div className="flex space-x-5 mt-3">
                    <input type="text" name="" id="" placeholder="Your Name" className="border p-2 w-1/2 bg-white border-black" />
                    <input type="tel" name="" id="" placeholder="Your Number" className="border p-2 w-1/2 bg-white border-black" />
                </div>
                <input type="email" name="" id="" placeholder="Your Email" className="border p-2 w-full mt-3 bg-white border-black" />
                <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property" className="border bg-white border-black p-2 mt-3 w-full"></textarea>
                <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
                <div className="flex items-baseline space-x-2 mt-2">
                    <input type="checkbox" name="" id="" className="inline-block text-white" />
                    <p className="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                </div>
                <input type="submit" value="Submit" className="hover:cursor-pointer rounded-lg mt-6 bg-green-600 hover:bg-green-500 text-white font-semibold p-3" />
            </form>
        </div>
    );
};

export default ContactUs;