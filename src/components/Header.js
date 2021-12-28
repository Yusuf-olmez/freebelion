
// import  Typewriter  from "typewriter-effect";
const Header = () => {

    return (
        <div className="header">
            <div>
                <span className="logo ">Dropbox  </span>

                <b>My photo album </b>

            </div>

            {/* <div className="typewriter">

                <Typewriter
                    onInit = {(typewriter) => {
                            typewriter.typeString("   Unlimited space for photos on Keepsafe").pauseFor(2000).deleteAll().typeString("Your photos are safe here ").pauseFor(20000).start()
                     
                    }}
                    options={{
                        loop: true
                      }}
                />
                
            </div> */}

             <p>
             Unlimited space for photos on Dropbox <br />
             Your photos are safe here .
          
            </p> 

        </div>

    ) ; 

}


export default Header ;  

