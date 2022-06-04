
import Navigator from "../Header/Navigation";

function SiteFooter ({user}) {
    return (
        <div className="text-center">
            <h4 className="text-6xl pt-16 ">Serkan Aydin</h4>
            <h6 className="text-2xl pt-5 ">UI & UX Designer</h6>
            <div className="pt-10 pb-40">
                <Navigator section={`footer`} user={user} />
            </div>
        </div>
    )
}

export default SiteFooter