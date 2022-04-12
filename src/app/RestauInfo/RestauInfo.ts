import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
@Component({
    templateUrl: 'RestauInfo.html',
    selector: 'page-restau-info',
    styleUrls: ['RestauInfo.scss']
})
export class RestauInfo {
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName ? : string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {}
    async buttonClick__j_61(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('Menu');
    }
    async button4Click__j_69(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('Reserved');
    }
    async button5Click__j_72(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('Reserved');
    }
    async button6Click__j_75(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('Reserved');
    }
    async button7Click__j_78(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('Reserved');
    }
    async button8Click__j_81(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('Reserved');
    }
}