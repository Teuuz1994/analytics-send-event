export class GoogleAnalytics {
  static sendException(options: SendErrorPageOptions) {
    try {
      const { error, function_name, page_name } = options;

      const parseToJson = JSON.parse(error)
      window.gtag('event', 'event_error', {
        event_category: 'error',
        event_label: `${page_name}::${function_name}`,
        value: parseToJson
      })
    } catch (error) {
      console.log(`[ERRO](${GoogleAnalytics.sendException.name})`, error)
    }
  }

  static sendSignIn(method: LoginMethod) {
    try {
      window.gtag('event', 'login', {
        method
      })
    } catch (error) {
      console.log(`[ERRO](${GoogleAnalytics.sendSignIn.name})`, error)
    }
  }

  static sendPageView(options: SendPageViewOptions) {
    try {
      const { page_title, client_id } = options

      if (options.client_id) {
        window.gtag('event', 'page_view', {
          page_location: window.location.pathname + window.location.search,
          page_title,
          client_id
        })
        return;
      }

      window.gtag('event', 'page_view', {
        page_location: window.location.pathname + window.location.search,
        page_title,
      })
    } catch (error) {
      console.log(`[ERRO](${GoogleAnalytics.sendPageView.name})`, error)
    }
  }


  static sendSignUp() {
    try {
      window.gtag('event', 'sign_up', {
        method: 'RESTFULL'
      })
    } catch (error) {
      console.log(`[ERRO](${GoogleAnalytics.sendSignUp.name})`, error)
    }
  }

  static sendSearchTerm(searchTerm: string) {
    try {
      window.gtag('event', 'search', {
        search_term: searchTerm
      })
    } catch (error) {
      console.log(`[ERRO](${GoogleAnalytics.sendSearchTerm.name})`, error)
    }
  }

  static sendOnClickEvent(options: OnCLickEventOptions) {
    try {
      const { data, function_name, page_name } = options;

      if (data) {
        let parsedData = data;

        if (typeof data === 'object' || Array.isArray(data)) {
          parsedData = JSON.stringify(data)
        }

        window.gtag('event', 'on_click', {
          event_category: 'on_click',
          event_label: `${page_name}::${function_name}`,
          value: parsedData
        })
        return;
      }

      window.gtag('event', 'on_click', {
        event_category: 'on_click',
        event_label: `${page_name}::${function_name}`,
      })
    } catch (error) {
      console.log(`[ERRO](${GoogleAnalytics.sendOnClickEvent.name})`, error)
    }
  }
}