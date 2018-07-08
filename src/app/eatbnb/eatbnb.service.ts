import { Injectable, Inject } from '@angular/core';
import { IEatbnb } from './eatbnbs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError} from 'rxjs/operators'

@Injectable()
export class EatbnbService {

    getProducts(): IEatbnb[] {
        return [
            {
                "productId": 1,
                "productName": "Feast",
                "description": "A bunch of vegetables and chicken",
                "price": 19.95,
                "reviews": 100,
                "starRating": 3.2,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/download_cm9oay.jpg"
            },
            {
                "productId": 2,
                "productName": "Thanksgiving feast",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "reviews": 100,
                "starRating": 4.2,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/download-1_mglbc7.jpg"
            },
            {
                "productId": 5,
                "productName": "Hamburger",
                "description": "it also comes with fries",
                "price": 8.9,
                "reviews": 100,
                "starRating": 4.8,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/download-2_kp6s7r.jpg"
            },
            {
                "productId": 8,
                "productName": "Pie",
                "description": "Apple Pie :))",
                "price": 11.55,
                "reviews": 100,
                "starRating": 3.7,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/pie_nivavv.jpg"
            },
            {
                "productId": 10,
                "productName": "Cake",
                "description": "Chocolate Cake",
                "price": 35.95,
                "reviews": 100,
                "starRating": 4.6,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528226192/chocolate-cake.jpg"
            }, 
            {
                "productId": 1,
                "productName": "Feast",
                "description": "A bunch of vegetables and chicken",
                "price": 19.95,
                "reviews": 100,
                "starRating": 3.2,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/download_cm9oay.jpg"
            },
            {
                "productId": 2,
                "productName": "Thanksgiving feast",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "reviews": 100,
                "starRating": 4.2,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/download-1_mglbc7.jpg"
            },
            {
                "productId": 5,
                "productName": "Hamburger",
                "description": "it also comes with fries",
                "price": 8.9,
                "reviews": 100,
                "starRating": 4.8,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/download-2_kp6s7r.jpg"
            },
            {
                "productId": 8,
                "productName": "Pie",
                "description": "Apple Pie :))",
                "price": 11.55,
                "reviews": 100,
                "starRating": 3.7,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528224914/pie_nivavv.jpg"
            },
            {
                "productId": 10,
                "productName": "Cake",
                "description": "Chocolate Cake",
                "price": 35.95,
                "reviews": 100,
                "starRating": 4.6,
                "imageUrl": "http://res.cloudinary.com/anjali-m/image/upload/v1528226192/chocolate-cake.jpg"
            }
        ]
    }
}