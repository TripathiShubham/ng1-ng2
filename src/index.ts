import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log("bootstraped");
	const upgrade = platformRef.injector.get(UpgradeModule);
	upgrade.bootstrap(document.body, ['D2DAPP']);
});