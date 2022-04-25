export const queryTrending = `
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
            media(type: ANIME, sort: TRENDING_DESC) {
            id
            title {
                romaji
                english
            }
            siteUrl
            isAdult
            coverImage {
                extraLarge
                large
                medium
            }
        }
    }
}`;

export const queryPopular = `
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
            media(type: ANIME, sort: POPULARITY_DESC) {
            id
            title {
                romaji
                english
            }
            siteUrl
            isAdult
            coverImage {
                extraLarge
                large
                medium
            }
        }
    }
}`;

export const querySearch = `
query ($page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (search: $search){
        id
        title {
          romaji
          english
          native
        }
        coverImage {
            extraLarge
            large
            medium
        }
      }
    }
}`;

export const TOP_100 = `
query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media (type: ANIME, sort: SCORE_DESC){
        id
        coverImage {
            medium
        }
        title {
          romaji
          english
          native
        }
        genres
        format
        episodes
        averageScore
        popularity
        duration
        status
        season
        seasonYear
        isAdult
      }
    }
  }`;

export const queryDetail = `query ($id: Int) {
    Media (id: $id) {
      id
      title {
        english
      }
      description
      type
      bannerImage
      coverImage {
        large
      }
    }
}`;

export const GET_GENRE = `
query GetGenre($page: Int, $perPage: Int, $genre: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media (genre: $genre,type: ANIME, sort: SCORE_DESC){
        id
        coverImage {
            medium
        }
        title {
          romaji
          english
          native
        }
        genres
        format
        episodes
        averageScore
        popularity
        duration
        status
        season
        seasonYear
        isAdult
      }
    }
  }`;
