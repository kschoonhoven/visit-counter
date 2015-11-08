
class VisitorsController < ApplicationController

  # POST    visitor/:id
  def update_visitor

    member_id = params[:id]

    if system("casperjs --ignore-ssl-errors=true --ssl-protocol=any ~/app/utils/fernwoodfitness_visitor_helper.js #{member_id}")
      render json: { status: :success, member_id: member_id }
    else
      render json: { status: :unprocessable_entity, errors: 'system error' }
    end

  end

end