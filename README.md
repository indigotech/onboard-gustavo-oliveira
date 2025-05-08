Este é um aplicativo mobile desenvolvido em React Native. Ele roda tanto em dispositivos Android quanto iOS. Siga as instruções abaixo para configurar o ambiente de desenvolvimento e executar o projeto.

### Pré-requisitos

Antes de começar, é necessário ter as seguintes ferramentas instaladas na sua máquina:

- Node.js (versão recomendada: LTS)
- Java JDK 11 ou superior
- Android Studio
- Xcode (somente para desenvolvimento iOS - MacOS)
- Watchman (para sistemas Mac/Linux)
  React Native CLI:
  `bashnpm install -g react-native-cli`

### Configuração do ambiente

Siga a documentação oficial do React Native e escolha a aba "React Native CLI", não a "Expo".https://reactnative.dev/docs/environment-setup
Instale todas as ferramentas listadas nos pré-requisitos.
Configure as variáveis de ambiente do Android SDK (no caso do Android).
No Android Studio, abra o SDK Manager e instale as versões necessárias da API e o emulador.
No Xcode, instale os simuladores necessários (caso esteja desenvolvendo para iOS).

### Executando o projeto

Após clonar o repositório, siga os passos abaixo:
Instale as dependências:
`bashnpm install# ouyarn installRode o aplicativo:`
Android:
`bashnpx react-native run-android`
iOS:
`bashcd iospod installcd ..npx react-native run-ios`
