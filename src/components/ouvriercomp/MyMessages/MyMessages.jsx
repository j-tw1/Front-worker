import React , {useState} from 'react'
import './mymessages.css'

function MyMessages() {
  return (
    <div id="layoutSidenav_content">
        <main className='ouvriermessages'>
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-xl-12">
                <div className="border-bottom">
                  <div className="card-header">
                    <i className="feather-message-square mr-1" />
                    Latest Messaging
                  </div>
                  <div className="card-body osahan-chat p-0">
                    <div className="row m-0">
                      <div className="border-right col-lg-5 col-xl-4 px-0">
                        <div className="osahan-chat-left">
                          <div className="position-relative icon-form-control p-3 border-bottom">
                            <i className="feather-search position-absolute" />
                            <input placeholder="Search messages" type="text" className="form-control" />
                          </div>
                          <div className="osahan-chat-list">
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Ashley Briggs</div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check text-primary" /> Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            <div className="p-3 d-flex align-items-center bg-light border-left border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Carl Jenkins
                                </div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check" /> Semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Bertha Martin
                                </div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check text-primary" /> Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Stacie Hall
                                </div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check" /> Semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Carl Jenkins
                                </div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check" /> Semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Bertha Martin
                                </div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check text-primary" /> Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Bertha Martin
                                </div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check text-primary" /> Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden">
                              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp" alt="" /></div>
                              <div className="font-weight-bold mr-1 overflow-hidden">
                                <div className="text-truncate">Stacie Hall
                                </div>
                                <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-check" /> Semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                              </div>
                              <span className="ml-auto mb-auto">
                                <div className="text-right text-muted pt-1 small">00:21PM</div>
                              </span>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-xl-8 px-0">
                        <div className="p-3 d-flex align-items-center  border-bottom osahan-post-header">
                          <div className="font-weight-bold mr-1 overflow-hidden">
                            <div className="text-truncate">Carl Jenkins
                            </div>
                            <div className="small text-truncate overflow-hidden text-black-50">Askbootstap.com - Become a Product Manager with super power</div>
                          </div>
                          <span className="ml-auto">
                            <button type="button" className="btn btn-outline-primary btn-sm rounded">
                              <i className="feather-phone" />
                            </button>
                            <button type="button" className="btn btn-outline-primary btn-sm rounded">
                              <i className="feather-video" />
                            </button>
                            <div className="btn-group">
                              <button type="button" className="btn btn-outline-primary btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather-more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item" type="button"><i className="feather-trash" /> Delete</button>
                                <button className="dropdown-item" type="button"><i className="feather-x-circle" /> Turn Off</button>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div className="osahan-chat-box p-3 border-top border-bottom bg-light">
                          <div className="text-center my-3">
                            <span className="px-3 py-2 small bg-white shadow-sm  rounded">DEC 21, 2020</span>
                          </div>
                          <div className="d-flex align-items-center osahan-post-header">
                            <div className="dropdown-list-image mr-3 mb-auto"><img className="rounded-circle" src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp" alt="" /></div>
                            <div className="mr-1">
                              <div className="text-truncate h6 mb-3">Carl Jenkins
                              </div>
                              <p>Hi Marie</p>
                              <p>welcome to Live Chat! My name is Jason. How can I help you today?
                                <a href="#">iamosahan@gmail.com</a>
                              </p>
                            </div>
                            <span className="ml-auto mb-auto">
                              <div className="text-right text-muted pt-1 small">00:21PM</div>
                            </span>
                          </div>
                          <div className="text-center my-3">
                            <span className="px-3 py-2 small bg-white shadow-sm rounded">DEC 22, 2020</span>
                          </div>
                          <div className="d-flex align-items-center osahan-post-header">
                            <div className="dropdown-list-image mr-3 mb-auto"><img className="rounded-circle" src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" /></div>
                            <div className="mr-1">
                              <div className="text-truncate h6 mb-3">Jack P. Angulo
                              </div>
                              <p>Hi, I wanted to check my order status. My order number is 0009483021 😀</p>
                            </div>
                            <span className="ml-auto mb-auto">
                              <div className="text-right text-muted pt-1 small">00:21PM</div>
                            </span>
                          </div>
                          <div className="text-center my-3">
                            <span className="px-3 py-2 small bg-white shadow-sm rounded">DEC 23, 2020</span>
                          </div>
                          <div className="d-flex align-items-center osahan-post-header">
                            <div className="dropdown-list-image mr-3 mb-auto"><img className="rounded-circle" src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp" alt="" /></div>
                            <div className="mr-1">
                              <div className="text-truncate h6 mb-3">Carl Jenkins
                              </div>
                              <p>Is there anything else that I can do for you?</p>
                              <p>wI understand your concern… I wouldn’t want my child’s gift to arrive late either. It looks like your order is set to arrive in 2 business days, so it should arrive by Friday, just in time!</p>
                            </div>
                            <span className="ml-auto mb-auto">
                              <div className="text-right text-muted pt-1 small">00:21PM</div>
                            </span>
                          </div>
                          <div className="text-center my-3">
                            <span className="px-3 py-2 small bg-white shadow-sm rounded">DEC 24, 2020</span>
                          </div>
                          <div className="d-flex align-items-center osahan-post-header">
                            <div className="dropdown-list-image mr-3 mb-auto"><img className="rounded-circle" src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" /></div>
                            <div className="mr-1">
                              <div className="text-truncate h6 mb-3">Jack P. Angulo
                              </div>
                              <p>Great, thank you! Yes, I also wanted to make sure I entered the right shipping address. My address is 12390 Mulberry Ln, Coral Springs, FL 33067. Is that where it’s being shipped to?
                              </p>
                            </div>
                            <span className="ml-auto mb-auto">
                              <div className="text-right text-muted pt-1 small">00:21PM</div>
                            </span>
                          </div>
                        </div>
                        <div className="w-100 border-top border-bottom">
                          <textarea placeholder="Write a message…" className="form-control border-0 p-3 shadow-none" rows={2} defaultValue={""} />
                        </div>
                        <div className="p-3 d-flex align-items-center">
                          <div className="overflow-hidden">
                            <button type="button" className="btn btn-outline-primary btn-sm rounded">
                              <i className="feather-image" />
                            </button>
                            <button type="button" className="btn btn-outline-primary btn-sm rounded">
                              <i className="feather-paperclip" />
                            </button>
                            <button type="button" className="btn btn-outline-primary btn-sm rounded">
                              <i className="feather-camera" />
                            </button>
                          </div>
                          <span className="ml-auto">
                            <button type="button" className="btn btn-primary btn-sm rounded">
                              <i className="feather-send" /> Send
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>

      </div>

  )
}

export default MyMessages