import {Routes} from "@angular/router";
import {ShipmentListPageComponent} from "../shipment-list/container/shipment-list-page.component";
import {TaskListPageComponent} from "../task-list/container/task-list-page.component";
import {ShipmentCapturePageComponent} from "../shipment-capture/container/shipment-capture-page.component";

/*
 * Router configuration for the component task
 */
export const SHIPMENT_ROUTES: Routes = [
    {
        path: "shipments",
        component: ShipmentListPageComponent
    },
    {
        path: "shipments/capture",
        component: ShipmentCapturePageComponent
    },
    {
        path: "tasks",
        component: TaskListPageComponent
    },
    {
        path: "shipments/edit/:id",
        component: ShipmentCapturePageComponent
    },
];
