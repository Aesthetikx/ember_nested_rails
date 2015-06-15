class Api::CommentsController < ApplicationController
  def index
    @comments = post.comments
    render json: @comments
  end

  def show
    @comment = post.comments.find(params[:id])
    render json: @comment
  end

  def create
    @comment = post.comments.build(comment_params)
    if @comment.save
      render json: @comment, status: 201
    else
      render json: @comment.errors, status: 422
    end
  end

  def update
    @comment = post.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment = post.comments.find(params[:id])
    @comment.destroy
    head :no_content, status: 204
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def post
    Post.find(params[:post_id])
  end
end
