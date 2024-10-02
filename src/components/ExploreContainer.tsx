import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      
    <div id='firstSection'>
      <section id='sectionLeft'>
        <h1 className='mainTitle'>To Faith Blog.</h1>
        </section>
      <section id='sectionRight'>
      <p className='saudation'>Bem-Vindos!</p>
      <p className='explainBlog'>Este é um blog. direcionado para o assunto fé Cristã! O testemunho é parte fundamental para aqueles que vivem em Cristo, fique à vontade para testemunhar.</p>
      <p className='blessing'>God Bless you!</p>
      </section>
    </div>

    <div className="image">
      <img src="public/banner.jpg" alt="banner" />
    </div>

    <div id='midSection'>
      <section id='midSectionLeft'>
        <h4 className='midTitleLeft'>Veja as publicações aqui</h4>
      </section>
      <section id='midSectionRight'>
        <h4 className='midTitleRight'>Quem publicou isso?</h4>
      </section>
    </div>

    <div id='finalSection'>
      <section id='finalSectionLeft'>
        <img src="public/favicon.png" alt="banner 2" />
      </section>
      <section id='finalSectionRight'>
        <h2 className='finalTitle'>Mais para você</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, saepe quam laboriosam a est illo sint molestias harum inventore quo minima nisi, dolores odio enim eveniet. Aperiam id unde beatae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae eligendi eius dicta, recusandae officiis. Dolor officia quis harum? Quis, dolorem? Error quibusdam nemo eaque atque illum minus et voluptates.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum hic consectetur quibusdam in, delectus asperiores quisquam explicabo dolores mollitia reiciendis, soluta sed, beatae vel natus! Dolorem nemo nostrum fuga?</p>
      </section>
    </div>

    </div>
    
  );
};

export default ExploreContainer;
