import { subscriptionMultipleOperators } from './operators/multiple-operator/multiple-operator';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>

    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

// iShopSubscriptions();
// coldSubscriptions();
// hotdSubscriptions();

//#region OPERADORES DE CREACION
// subscriptionCreateObservable();
//#endregion

//#region OPERADORES DE COMBINACION
// subscriptionOperatorConcat();
//#endregion

//#region OPERADORES DE TRANSFORMACION
// subscriptionOperatorMap()
// subscriptionOperatorConcatMap();
// subscriptionOperatorSwitchMap();
//#endregion

//#region OPERADORES DE FILTRADO
// subscriptionOperatorFilter();
// subscriptionOperatorDebounceTime();
// subscriptionOperatorTakeUntil();
//#endregion

//#region OPERADORES DE ERRORR
// subscriptionOperatorCatchError();
//#endregion

//#region MULTIPLE OBSERVABLE
subscriptionMultipleOperators();
//#endregion
