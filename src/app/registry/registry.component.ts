import { Component } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent {
  private readonly registries: Record<string, string> = {
    bbb:
      'https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548891361',
    target:
      'https://www.target.com/gift-registry/giftgiver?registryId=223f55674cdf4c0283a9ad618374d6f1&type=WEDDING',
    amazon: 'https://www.amazon.com/wedding/registry/3MHKXTTPWBSE9',
  };

  openReg(regName: string): void {
    window.open(this.registries[regName], '_blank');
  }
}
