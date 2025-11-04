


export const Templates = {
    
    'home': `
        <section id="quem-somos">
            <h2>Quem Somos</h2>
            <p>
                O <strong>Sem Dono? Sem Problemas</strong> nasceu do amor pelos animais e do desejo de 
                mudar vidas. Somos uma equipe de <strong>voluntários apaixonados</strong> que acredita que 
                cada animal merece um lar cheio de carinho e respeito.
            </p>
            <p>
                Atuamos com <strong>resgate, cuidados veterinários, adoção responsável</strong> e 
                campanhas de conscientização, sempre com o objetivo de construir uma sociedade mais 
                empática e solidária com os nossos amigos de quatro patas.
            </p>
            <div class="quem-somos-equipe">
                <div class="membro">
                    <img src="imagens/011.jpg" alt="Foto de voluntário cuidando de um cachorro">
                    <h3>Ana Silva</h3>
                    <p>Coordenadora de Resgates</p>
                </div>
                <div class="membro">
                    <img src="imagens/013.jpg" alt="Foto de voluntária com um gato">
                    <h3>Lucas Pereira</h3>
                    <p>Responsável por Adoções</p>
                </div>
                <div class="membro">
                    <img src="imagens/012.jpg" alt="Foto de veterinário com cachorro">
                    <h3>Mariana Costa</h3>
                    <p>Veterinária Parceira</p>
                </div>
            </div>
        </section>
        
        <section>
            <h2>Adote um Amigo</h2>
            <p>Existem muitos animais precisando de um lar. <strong>Seja parte dessa mudança!</strong></p>
            <div class="cards-container">
                <div class="card">
                    <img src="imagens/007.jpg" alt="Cachorro Rex" />
                    <h3>Rex</h3>
                    <span class="status disponivel">Disponível</span>
                    <p>Rex é um cão brincalhão e amoroso, à espera de um lar cheio de carinho.</p>
                    <button class="btn verde">Adotar</button>
                </div>
                <div class="card">
                    <img src="imagens/009.jpg" alt="Gata Luna" />
                    <h3>Luna</h3>
                    <span class="status observacao">Em observação</span>
                    <p>Luna é uma gatinha calma, resgatada recentemente e pronta para receber amor.</p>
                    <button class="btn laranja">Saiba mais</button>
                </div>
                <div class="card">
                    <img src="imagens/008.jpg" alt="Cachorro Thor" />
                    <h3>Thor</h3>
                    <span class="status disponivel">Disponível</span>
                    <p>Thor é um cachorro leal e cheio de energia, pronto para brincar e proteger sua nova família.</p>
                    <button class="btn verde">Adotar</button>
                </div>
            </div>
        </section>
        
        <section class="sobre">
            <h2>O projeto <span class="destaque">Sem Dono? Sem Problemas</span></h2>
            <p>Nasceu com o objetivo de conectar animais resgatados a pessoas dispostas a oferecer um novo lar cheio de amor.</p>
            <p>Nossa equipe é formada por voluntários apaixonados por causas animais. Atuamos com resgate, cuidados veterinários,
                acolhimento temporário e adoção responsável.
            </p>
            <button class="btn verde">Fale Conosco</button>
        </section>
    `,

    
    'cadastro': `
     <div class="container">
    <h2>Cadastro</h2>
    <form>
      <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>
      <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
      <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Digite o CPF no formato 000.000.000-00" maxlength="14">
      <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" title="Digite o telefone no formato (00) 00000-0000" maxlength="15">
      <input type="date" id="dataNascimento" name="dataNascimento" required>
      <input type="text" id="endereco" name="endereco" placeholder="Rua, número, complemento" required>
      <input type="text" id="cep" name="cep" placeholder="00000-000" required pattern="\\d{5}-\\d{3}" title="Digite o CEP no formato 00000-000" maxlength="9">
      <input type="text" id="cidade" name="cidade" placeholder="Sua cidade" required>
      <input type="text" id="estado" name="estado" placeholder="Seu estado" required>
      <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required minlength="6">
      <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua senha" required minlength="6">
      <button type="submit">Cadastrar</button>
    </form>
    <div class="login-link">
      Já tem conta? <a href="#" data-link="/login">Entrar</a>
    </div>
  </div>
    `,

    
    '404': `
        <section class="page-section error-404">
            <h2>Página Não Encontrada</h2>
            <p>A rota solicitada não existe.</p>
        </section>
    `,
    'projetos': `
    <div class="alert alert-success">
      💚 Bem-vindo ao projeto <strong>Sem Dono? Sem Problemas!</strong> — Junte-se a nós e ajude a transformar vidas.
    </div>

    <section class="banner-projetos">
      <h2>Conheça Nossos Projetos</h2>
      <p>Transformando vidas, uma pata de cada vez 🐾</p>
    </section>

    <main>
      <section>
        <h2 class="texto-centro">Projetos Sociais</h2>

        <div class="projetos-container">
          <article class="card-projeto">
            <img src="imagens/003.jpg" alt="Cachorro feliz" class="img-projeto" />
            <h3>Projeto Adoção Consciente</h3>
            <p>Promovemos a adoção responsável de animais resgatados, garantindo que cada pet encontre um lar cheio de amor e segurança.</p>
            <a href="#" class="btn btn-primary">Saiba mais</a>
          </article>

          <article class="card-projeto">
            <img src="imagens/004.jpg" alt="Voluntário cuidando de um cachorro" class="img-projeto" />
            <h3>Projeto Voluntariado Ativo</h3>
            <p>O voluntariado transforma vidas — tanto dos animais quanto das pessoas envolvidas. Nossos voluntários ajudam em eventos, campanhas e cuidados diários.</p>
            <a href="#" class="btn btn-primary">Saiba mais</a>
          </article>

          <article class="card-projeto">
            <img src="imagens/005.jpg" alt="Campanha de vacinação" class="img-projeto" />
            <h3>Campanha de Vacinação</h3>
            <p>Levamos vacinação gratuita para animais de comunidades vulneráveis, prevenindo doenças e promovendo saúde animal.</p>
            <a href="#" class="btn btn-primary">Saiba mais</a>
          </article>
        </div>
      </section>

      <section class="como-ajudar">
        <h2>Como Participar</h2>
        <p>Quer fazer parte da mudança? Cadastre-se como voluntário, participe das campanhas e ajude nossos peludos a terem uma nova chance!</p>
        <a href="#/cadastro" class="btn btn-secondary" data-link>Quero Ajudar</a>
      </section>
    </main>
`,

};