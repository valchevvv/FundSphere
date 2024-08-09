import { Button } from "./ui/button";


const Navbar = () => {
    return (
        <header className="pt-6 px-16 pb-4 bg-[#EDEFFC] border-b">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <div className="p-3">Home</div>
                    <div className="p-3">Campaigns</div>
                    <div className="p-3">Fonds</div>
                </div>
                <a>Logo</a>
                <div className="flex ">
                    <div className="p-3">Help Center</div>
                    <div className="p-3">Connect Wallet</div>
                    <Button className="rounded-full px-8 bg-[#40C783] hover:bg-[#339F69] transition-colors ease-in-out">Start Campaign</Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;