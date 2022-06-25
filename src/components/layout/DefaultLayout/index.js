import Header from "../commons/Header";
import Sidebar from "../commons/Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;