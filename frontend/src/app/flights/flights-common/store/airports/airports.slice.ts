import {AirportResource} from "../../api/airports/airport.resource";
import {SortOrder} from "../../../../shared/enums/sort-order.enum";

export interface AirportSlice {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    sortBy: string;
    sortOrder: SortOrder;
    airportList: AirportResource[];
    loading: boolean;
}
