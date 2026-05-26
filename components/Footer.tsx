import Link from "next/link"


const Footer = () => {
  return (
    <footer className=" bg-black-100 flex-center flex-between body-text  w-full gap-y-10 border-t border-black-200 bg-black-100 px-20 py-1 ma-md:flex-col">
    <div>Footer</div>
      <p>copyright &copy; 2023 JS Mastery Pro | All rights reserved.</p>
      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terms of Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer