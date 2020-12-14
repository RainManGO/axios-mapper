/*
 * @Description: 
 * @Author: ZY
 * @Date: 2020-12-11 13:52:11
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-11 13:52:11
 */

// {
//     "slideshow": {
//       "author": "Yours Truly",
//       "date": "date of publication",
//       "slides": [
//         {
//           "title": "Wake up to WonderWidgets!",
//           "type": "all"
//         },
//         {
//           "items": [
//             "Why <em>WonderWidgets</em> are great",
//             "Who <em>buys</em> WonderWidgets"
//           ],
//           "title": "Overview",
//           "type": "all"
//         }
//       ],
//       "title": "Sample Slide Show"
//     }
//   }

export interface Slide {
	title: string;
	type: string;
}

export interface Slideshow {
	author: string;
	date: string;
	slides: Slide[];
	title: string;
}

export interface RootObject {
	slideshow: Slideshow;
}

