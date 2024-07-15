import Logo from "@/assets/Logo.png";


export default function Footer() {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} className="md:w-[150px]" />
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© FitBlitz All Rights Reserved. 2024</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">About us</p>
                    <p className="my-5">Services</p>
                    <p>Membership Details</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Have any question about our services?</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>  
    )
}