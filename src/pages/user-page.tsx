import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PageTitle} from '../components/page-title';
import {UserForm} from '../components/user-form';
import {useUserForm} from '../hooks/user-form.hook';
import {useCreateUser} from '../hooks/user.hook';

export const UserPage: React.FC = () => {
  const userForm = useUserForm();
  const {createUser} = useCreateUser();

  const handleSubmit = () => {
    if (userForm.validateFields()) {
      createUser({
        name: userForm.name,
        email: userForm.email,
        phone: userForm.phone,
        birthDate: userForm.birthDate,
        role: userForm.role,
        password: userForm.password,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PageTitle title="Adicionar Usuário" />
      <UserForm
        name={userForm.name}
        setName={userForm.setName}
        email={userForm.email}
        setEmail={userForm.setEmail}
        phone={userForm.phone}
        setPhone={userForm.setPhone}
        birthDate={userForm.birthDate}
        setBirthDate={userForm.setBirthDate}
        role={userForm.role}
        setRole={userForm.setRole}
        password={userForm.password}
        setPassword={userForm.setPassword}
        nameError={userForm.nameError}
        emailError={userForm.emailError}
        phoneError={userForm.phoneError}
        birthDateError={userForm.birthDateError}
        roleError={userForm.roleError}
        passwordError={userForm.passwordError}
        onSubmit={handleSubmit}
        disabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
});
