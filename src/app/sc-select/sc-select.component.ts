import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-select',
  templateUrl: './sc-select.component.html',
  styleUrls: ['./sc-select.component.css']
})
export class ScSelectComponent implements OnInit {
  @Input() searchPlaceholder: string;
  @Input() label: string;
  @ViewChild('dataSelectLabelEl') el:ElementRef;
  statusOpen: boolean;
  elementsSelectedDisplay: string;
  @Input() listElements: Array<{id: number, name: string,checked?: boolean}>;
  @Output() onChange = new EventEmitter;
  filter = {
    name: null
  };

  elementsSelected: any[];

  constructor() {}

  ngOnInit() {
    if(!this.elementsSelected){
      this.elementsSelected = []
    }
    let $this = this;
    document.onkeydown = function(evt:any) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
          isEscape = (evt.key == "Escape" || evt.key == "Esc");
      } else {
          isEscape = (evt.keyCode == 27);
      }
      if (isEscape) {
          if($this.statusOpen){
            $this.statusOpen = false;
          }
      }
    };

    var box = document.querySelector(".wrapper-data-selected");     
      document.addEventListener("click", function(event:any) {      
        if (event.target.closest(".wrapper-data-selected")) return;
        if (event.target.closest(".remove-all-button")) return;        
          if($this.statusOpen){
            $this.statusOpen = false;
          }     
      });
  }

  toogleOpen($event){
    const id = $event.currentTarget;
      if(id.getAttribute('data-action') == 'dropdown-select'){
        this.statusOpen = !this.statusOpen;
      }
  }

  dataSelectLabel(e){
    this.el.nativeElement.class="open";
  }

  clearAll(){    
    this.elementsSelected = [];
    this.listElements.forEach((item) => {
      item.checked = false;
    })
    this.changeElemetsSelected();
  }
  
  toogleElement(e,item){
    if(e.target.checked){
      item.checked = true;
      this.elementsSelected.push(item);
    }else{
      let indexRemove = this.elementsSelected.indexOf(item);
      this.elementsSelected.splice(indexRemove,1)
    }
    this.changeElemetsSelected()
  }

 
  changeElemetsSelected(){
    if(this.elementsSelected.length > 0){
      let elementsToDisplay = [];     
      this.elementsSelected.forEach((item) => {
        elementsToDisplay.push(item.name);
      }) 
      this.elementsSelectedDisplay = elementsToDisplay.join(', ')
    }else{
      this.elementsSelectedDisplay = "";
    }
    this.onChange.emit(this.elementsSelected)    
  }


}
