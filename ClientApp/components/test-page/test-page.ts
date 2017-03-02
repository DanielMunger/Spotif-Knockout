import * as ko from 'knockout';
import 'isomorphic-fetch';

// Interfaces for JSON spotify data

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

interface Image {
    height: number;
    url: string;
    width: number;
}

interface Item {
    album_type: string;
    artists: Array<Artist>;
    available_markets: Array<string>;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Array<Image>;
    name: string;
    type: string;
    uri: string;
}

interface Album {
    href: string;
    items: Array<Item>;
    limit: number;
    next: Object;
    offset: number;
    previous: Object;
    total: number;
}

interface AlbumQuery {
    albums: Album;
}


// ViewModel

class TestPageViewModel {
    albumQuery = ko.observable<AlbumQuery>();
    albums = ko.observable<Item[]>();
    albumName = ko.observable<string>();

    //constructor() {
    //}

    public callAPI() {
        console.log("called function");

        fetch('/api/Spotify/SearchForAlbum/' + this.albumName())
            .then(response => response.json() as Promise<AlbumQuery>)
            .then(data => {
                console.log("successful response from api.");
                this.albumQuery(data);
                this.albums(data["albums"]["items"]);
            });
    }

}

export default { viewModel: TestPageViewModel, template: require('./test-page.html') };
