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