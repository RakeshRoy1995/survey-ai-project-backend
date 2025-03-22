// user_menu_view view definition
// This view is used to get the menu items for a user based on their role
// It joins the users, user_roles, roles, menu_permissions, menus, and menu_routes tables

CREATE VIEW
  user_menu_view AS
SELECT
  t1.id as user_id,
  t2.roleId as role_id,
  t3.name as role_name,
  t4.layer_id as layer_id,
  t5.name as menu_name,
  t5.parent as parent_menu,
  t5.route as menu_route,
  t5.sort,
  t6.section
FROM
  users t1
  JOIN user_roles t2 ON t1.id = t2.userId
  JOIN roles t3 ON t2.roleId = t3.id
  JOIN menu_permissions t4 ON t4.role_id = t3.id
  JOIN menus t5 ON t5.id = t4.menu_id
  JOIN menu_routes t6 ON t6.menu_id = t5.id;

  // create indexing for user_id
  CREATE INDEX idx_user_id ON users (id);



DROP VIEW IF EXISTS user_chat_view;

CREATE VIEW user_chat_view AS
SELECT  
    t1.aiReply, 
    t1.userId, 
    t1.status, 
    t2.blockId, 
    t2.sort as ques_sort, 
    t3.sort as block_sort, 
    t3.phaseId, 
    t2.question, 
    t1.question_id,
    t1.conversetion_id,
    t3.name AS block_name
FROM 
    useraichats t1
JOIN 
    questions t2 ON t1.question_id = t2.id
JOIN 
    blocks t3 ON t3.id = t2.blockId;








