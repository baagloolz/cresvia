import React from 'react';

export default function App(){
  return (
    <div style={{fontFamily:'Inter,system-ui',padding:20}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <img src="/assets/logo.png" alt="logo" style={{width:64,height:64,borderRadius:8}}/>
          <div style={{fontWeight:700}}>Cresvia Society</div>
          <div style={{fontSize:12,color:'#666'}}>PRCMDC — Student Society</div>
        </div>
        <nav>
          <a href="#mission">Mission</a> · <a href="#team">Team</a> · <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="mission" style={{marginTop:30}}>
          <h2>Mission & Objectives</h2>
          <p>The purpose of this agreement is to formally establish <strong>Cresvia Society</strong> within <strong>Pak Red Crescent Medical & Dental College</strong> as a student-led academic and community service platform, operating under the guidance and supervision of the Institution.</p>
        </section>

        <section id="cms" style={{marginTop:30}}>
          <h3>CMS (Netlify)</h3>
          <p>The admin panel is available at <strong>/admin</strong> after you deploy to Netlify and enable Identity + Git Gateway. Use it to add Posts, Events, Research updates and Gallery images.</p>
        </section>

        <section id="gallery" style={{marginTop:30}}>
          <h3>Gallery (Carousel)</h3>
          <div id="carousel" style={{width:420,height:240,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #eee',borderRadius:8}}>
            <div style={{textAlign:'center',color:'#999'}}>Carousel placeholder — images uploaded via CMS will appear here.</div>
          </div>
        </section>
      </main>

      <footer style={{marginTop:40,borderTop:'1px solid #eee',paddingTop:10}}>
        © {new Date().getFullYear()} Cresvia Society — <a href="https://cresvia.org.pk">cresvia.org.pk</a>
      </footer>
    </div>
  );
}
