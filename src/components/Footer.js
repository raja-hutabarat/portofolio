import NavBarSocial from "./NavBarSocial";

const Footer = ({ socials }) => {
    return ( 
        <section className = "Footer">
          <div className = "Footer-item py-3">
            <div>
              <h4 className = "text-spacing md py-1" > Donnimuhaedy.site </h4> 
              <p className = "sm" > Coded by Donni Muhaedi @2022 </p> 
              <p className = "sm"> Email: donnimuhaedy@gmail.com </p> 
            </div> 
                <div className="Footer-socmed">
                  <ul className = "Footer-social flex py-1" > 
                  {socials && socials.map(
                    ({ link, fa }) => ( 
                      <NavBarSocial link = { link }
                                      fa = { fa }
                                     key = { link }
                      />
                    ))
                  } 
                  </ul> 
                </div> 
          </div> 
        </section>
    );
};

export default Footer;