import * as ko from 'knockout';
import 'isomorphic-fetch';

class AlbumDetailsViewModel {
    albumDetails = ko.observable<RootObject>();

    constructor() {
        //var params = params.myParams;
        var params = window.location.href.split('/');
        console.log(params[4]);
        //fetch('/api/Spotify/SearchForAlbum/' + this.albumId())

    }
    //public callAPI() {

}

export default { viewModel: AlbumDetailsViewModel, template: require('./album-details.html') };



///v1/albums / { id }
interface ExternalUrls {
    spotify: string;
}

interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface Copyright {
    text: string;
    type: string;
}

interface ExternalIds {
    upc: string;
}


interface Image {
    height: number;
    url: string;
    width: number;
}


interface Item {
    artists: Array<Artist>;
    available_markets: Array<string>;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

interface Tracks {
    href: string;
    items: Array<Item>;
    limit: number;
    next: any;
    offset: number;
    previous: Object;
    total: number;
}

interface RootObject {
    album_type: string;
    artists: Array<Artist>;
    available_markets: Array<string>;
    copyrights: Array<Copyright>;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    genres: Array<Object>;
    href: string;
    id: string;
    images: Array<Image>;
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    tracks: Tracks; 
    type: string;
    uri: string;
}