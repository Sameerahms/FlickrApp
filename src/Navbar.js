const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Flicker App</h1>

            <div className="search">
                <input type="text" placeholder="  Search " className="prompt" />
            </div>
            <div>
            <input type="file" id="upload" />
            {/* <label>Choose file</label> */}
            </div>
      
        </nav>
    );
}
 
export default Navbar;