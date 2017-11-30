import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';

import { TelemetriesRoutingModule, routedComponents } from './telemetries-routing.module';

const components = [
];

@NgModule({
    imports: [ThemeModule, TelemetriesRoutingModule, AngularEchartsModule, NgxChartsModule, ChartModule],
    declarations: [...routedComponents, ...components],
})
export class TelemetriesModule { }