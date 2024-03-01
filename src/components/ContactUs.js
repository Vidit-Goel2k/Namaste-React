
const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-4 m-4 text-3xl font-bold">Contact Us</h1>
      <div>
        <form className="flex flex-col items-center justify-center">
          <input type="text" className="p-2 m-2 border border-black rounded-lg" placeholder="name" />
          <input type="text" className="p-2 m-2 border border-black rounded-lg" placeholder="message" />
          <button className="p-2 m-2 bg-red-200 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs