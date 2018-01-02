import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(objArr: any[], orderBy: string = 'name', desc: string = 'asc'): any[] {
  	console.log('orderBy:',orderBy,'order:',desc);
		let sortedObjArr = objArr.sort(function(a, b){
		 if(a[orderBy] == b[orderBy]) return 0; // equal
		 if(desc == 'asc') 
		 	return +(a[orderBy] > b[orderBy]);
		 else
		 	return +(a[orderBy] < b[orderBy]);
		});
		return sortedObjArr;
  }

}
