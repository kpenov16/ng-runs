import { Injectable } from '@angular/core'
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Injectable()
export class RouteService{
    getAllRoutes(){
        return ROUTES; 
    }
    getRoute(id:number){
        return ROUTES.find(route => route.id === id);
    }
}

const ROUTES = [
    {
        id: 1,
        description: 'Slow route',
        date: '03/23/2019',
        time: '18:00 pm',
        duration: '45 min',
        speed: '6',
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: 'Hovedgade 5',
            city: 'Lyngby',
            country: 'Denmark'
        } 
    },
    {
        id: 2,
        description: 'Fast route',
        date: '04/23/2019',
        time: '20:00 pm',
        duration: '30 min',
        speed: '9',
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: 'Hellebekgade 5',
            city: 'Copenhagen',
            country: 'Denmark'
        } 
    },
    {
        id: 3,
        description: 'Moderate route',
        date: '04/21/2019',
        time: '08:00 am',
        duration: '30 min',
        speed: '7',
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: 'Gamlegade 5',
            city: 'Roskilde',
            country: 'Denmark'
        } 
    },
    {
        id: 4,
        description: 'Moderate route',
        date: '06/21/2019',
        time: '10:00 am',
        duration: '60 min',
        speed: '7',
        imageUrl: 'assets/images/angularconnect-shield.png',
        onlineUrl: 'mysmap.dk' 
    },
    {
        id: 5,
        description: 'Creative route',
        date: '04/19/2019',
        time: '11:30 am',
        duration: '30 min',
        speed: '7',
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            city: 'Roskilde',
            country: 'Denmark'
        },
        onlineUrl: 'kaloyan.dk' 
    }

]