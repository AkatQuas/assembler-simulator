import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  ApartmentOutline,
  FastForwardOutline,
  PauseOutline,
  StepForwardOutline,
  UndoOutline,
  UploadOutline,
} from '@ant-design/icons-angular/icons';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';

const exports = [
  NzAlertModule,
  NzButtonModule,
  NzCardModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzDrawerModule,
  NzGridModule,
  NzInputModule,
  NzLayoutModule,
  NzMessageModule,
  NzSelectModule,
  NzSwitchModule,
  NzTableModule,
  NzTypographyModule,
  NzUploadModule,
];

const ngZorroConfig: NzConfig = {
  card: { nzSize: 'small' },
  table: { nzSize: 'small' },
};

@NgModule({
  declarations: [],
  imports: [CommonModule].concat(exports),
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: NZ_CONFIG,
      useValue: ngZorroConfig,
    },
  ],
  exports,
})
export class NzModule {}

export const NzIcons: IconDefinition[] = [
  ApartmentOutline,
  FastForwardOutline,
  PauseOutline,
  StepForwardOutline,
  UndoOutline,
  UploadOutline,
];
