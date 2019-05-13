import {
  CREATE_QUOTATION_REQUEST,
  CREATE_QUOTATION_SUCCESS,
  CREATE_QUOTATION_FAILURE,
  EDIT_QUOTATION_REQUEST,
  EDIT_QUOTATION_SUCCESS,
  EDIT_QUOTATION_FAILURE,
  DELETE_QUOTATION_REQUEST,
  DELETE_QUOTATION_SUCCESS,
  DELETE_QUOTATION_FAILURE,
  LIKE_QUOTATION_REQUEST,
  LIKE_QUOTATION_SUCCESS,
  LIKE_QUOTATION_FAILURE,
  DISLIKE_QUOTATION_REQUEST,
  DISLIKE_QUOTATION_SUCCESS,
  DISLIKE_QUOTATION_FAILURE,
  SORT_QUOTES_REQUEST,
  SORT_QUOTES_SUCCESS,
  SORT_QUOTES_FAILURE,
  FILTER_QUOTES_REQUEST,
  FILTER_QUOTES_SUCCESS,
  FILTER_QUOTES_FAILURE,
  LOAD_MORE_QUOTES_REQUEST,
  LOAD_MORE_QUOTES_SUCCESS,
  LOAD_MORE_QUOTES_FAILURE,
  RESET_PAGINATION,
  RESET_QUOTES_STATE
} from 'app/quotes/actionTypes';

export const createQuotationRequest = () => ({
  type: CREATE_QUOTATION_REQUEST
});

export const createQuotationSuccess = () => ({
  type: CREATE_QUOTATION_SUCCESS
});

export const createQuotationFailure = error => ({
  type: CREATE_QUOTATION_FAILURE,
  error
});

export const editQuotationRequest = () => ({
  type: EDIT_QUOTATION_REQUEST
});

export const editQuotationSuccess = () => ({
  type: EDIT_QUOTATION_SUCCESS
});

export const editQuotationFailure = error => ({
  type: EDIT_QUOTATION_FAILURE,
  error
});

export const deleteQuotationRequest = () => ({
  type: DELETE_QUOTATION_REQUEST
});

export const deleteQuotationSuccess = () => ({
  type: DELETE_QUOTATION_SUCCESS
});

export const deleteQuotationFailure = error => ({
  type: DELETE_QUOTATION_FAILURE,
  error
});

export const likeQuotationRequest = () => ({
  type: LIKE_QUOTATION_REQUEST
});

export const likeQuotationSuccess = () => ({
  type: LIKE_QUOTATION_SUCCESS
});

export const likeQuotationFailure = error => ({
  type: LIKE_QUOTATION_FAILURE,
  error
});

export const dislikeQuotationRequest = () => ({
  type: DISLIKE_QUOTATION_REQUEST
});

export const dislikeQuotationSuccess = () => ({
  type: DISLIKE_QUOTATION_SUCCESS
});

export const dislikeQuotationFailure = error => ({
  type: DISLIKE_QUOTATION_FAILURE,
  error
});

export const sortQuotesRequest = sortBy => ({
  type: SORT_QUOTES_REQUEST,
  sortBy
});

export const sortQuotesSuccess = () => ({
  type: SORT_QUOTES_SUCCESS
});

export const sortQuotesFailure = error => ({
  type: SORT_QUOTES_FAILURE,
  error
});

export const filterQuotesRequest = filter => ({
  type: FILTER_QUOTES_REQUEST,
  filter
});

export const filterQuotesSuccess = () => ({
  type: FILTER_QUOTES_SUCCESS
});

export const filterQuotesFailure = error => ({
  type: FILTER_QUOTES_FAILURE,
  error
});

export const loadMoreQuotesRequest = () => ({
  type: LOAD_MORE_QUOTES_REQUEST
});

export const loadMoreQuotesSuccess = () => ({
  type: LOAD_MORE_QUOTES_SUCCESS
});

export const loadMoreQuotesFailure = error => ({
  type: LOAD_MORE_QUOTES_FAILURE,
  error
});

export const resetPagination = () => ({
  type: RESET_PAGINATION
});

export const resetQotesState = () => ({
  type: RESET_QUOTES_STATE
});
