class EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def show
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    end
  end

  def new
  end

  def create
  end

  def edit
  end

  private

  def event_params
    params.require(:event).permit(:title, :all_day, :starts_at, :ends_at, :url, :color)
  end


end
