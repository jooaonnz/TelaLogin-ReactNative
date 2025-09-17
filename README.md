Tela de Cadastro e Redefinição de Senha - React Native

Tela de Cadastro e Redefinição de Senha realizada em React Native, com navegação entre telas, validação de formulário e interação com botões. O objetivo do projeto é praticar a criação de formulários, estados, navegação e uso de ícones em aplicativos mobile.

📋 Funcionalidades

Tela de Login com campos de e-mail e senha.

Tela de Cadastro com campos de nome, CPF, e-mail e senha.

Tela de Redefinição de Senha.

Validação de campos para habilitar o botão apenas quando todos estiverem preenchidos.

Mostrar/ocultar senha usando ícones.

Navegação entre telas usando Stack Navigation.

Mensagens de alerta (Alert) para ações do usuário.

⚙️ Dependências do Projeto
1. Núcleo React Native

Essenciais para qualquer projeto:

react
react-native

2. Navegação

Usado para trocar de telas:

npm install @react-navigation/native
npm install @react-navigation/native-stack


Dependências adicionais necessárias (especialmente no Expo):

expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

3. Ícones

Usado para o botão de mostrar/esconder senha:

# Se estiver usando Expo
expo install @expo/vector-icons

# Se não estiver usando Expo
npm install react-native-vector-icons

🛠️ Como Rodar

Clonar o repositório:

git clone https://github.com/jooaonnz/TelaLogin-ReactNative.git
cd TelaLogin-ReactNative


Instalar dependências:

npm install
expo install


Rodar o projeto:

expo start
