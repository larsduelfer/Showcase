import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SHIPMENT_ROUTES} from "./shipment-routing.routes";
import {ShipmentCommonModule} from "../shipment-common/shipment-common.module";

@NgModule({
  imports: [
    ShipmentCommonModule,
    RouterModule.forChild(SHIPMENT_ROUTES)
  ],
  declarations: []
})
export class ShipmentRoutingModule { }
