import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app-product';
  // properies + methods

  // obs = new Observable( (observer) => {
  //     console.log('Observable started')

  //     observer.next("1")
  //     observer.next("2")
  //     observer.next("3")
  //     observer.next("4")
  //     observer.next("5")
  //   }
  // )

  obs01 = new Observable( (observer) => {
    console.log('Observable started')

    setTimeout(
      () => {
        observer.next("1")
      }, 2000
    )
    setTimeout(
      () => {
        observer.next("2")
      }, 4000
    )
    setTimeout(
      () => {
        observer.next("3")
      }, 8000
    )
    setTimeout(
      () => {
        observer.next("4")
      }, 10000
    )
    setTimeout(
      () => {
        observer.next("5")
      }, 12000
    )
  }
)


// obs02 = new Observable( (observer) => {
//   console.log('Observable started')

//   setTimeout(
//     () => {
//       observer.next("1")
//     }, 2000
//   )
//   setTimeout(
//     () => {
//       observer.next("2")
//     }, 4000
//   )
//   setTimeout(
//     () => {
//       observer.next("3")
//     }, 8000
//   )
//   setTimeout(
//     () => {
//       observer.error("error emitted")
//     }, 10000
//   )
//   setTimeout(
//     () => {
//       observer.next("4")
//     }, 12000
//   )
// }
// )

obs03 = new Observable( (observer) => {
  console.log('Observable started')

  setTimeout(
    () => {
      observer.next("1")
    }, 2000
  )
  setTimeout(
    () => {
      observer.next("2")
    }, 4000
  )
  setTimeout(
    () => {
      observer.next("3")
    }, 8000
  )
  setTimeout(
    () => {
      observer.next("4")
    }, 10000
  )
  setTimeout(
    () => {
      observer.next("5")
    }, 12000
  )

  setTimeout(
    () => {
      observer.complete()
    }, 12000
  )

}
)

  ngOnInit() {
    // this.obs.subscribe(
    //   val => {console.log(val)},
    //   error => {console.log("error occured")},
    //   () => {console.log("completed")}
    // )


    // this.obs01.subscribe(
    //   val => {console.log(val)},
    //   error => {console.log("error occured")},
    //   () => {console.log("completed")}
    // )

    // this.obs02.subscribe(
    //   val => {console.log(val)},
    //   error => {console.log("error occured")},
    //   () => {console.log("completed")}
    // )

    this.obs03.subscribe(
      val => {console.log(val)},
      error => {console.log("error occured")},
      () => {console.log("completed")}
    )
  }


}
