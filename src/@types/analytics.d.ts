declare type LoginMethod = 'Google' | 'Facebook' | 'BasicAuth'

declare type SendPageViewOptions = {
  client_id?: string;
  page_title: string;
}

declare type SendErrorPageOptions = {
  page_name?: string;
  function_name: string;
  error: any;
}

declare type OnCLickEventOptions = {
  page_name: string;
  function_name: string;
  data?: any
}